/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
import {shallowMount} from '@vue/test-utils';
import _ from 'lodash';
import LayoutTable from '../../../../layouts/table/LayoutTable';
import LayoutTableRow from "../../../../layouts/table/LayoutTableRow";

/**
 * Vue Component initializer for LayoutTable component. Since this component creates a deep hierarchy of sub-components,
 * we use `shallowMount` to initialize the wrapper.
 *
 * The default option object is:
 * ```
 * {
 *   provide: {
 *     logic: {
 *       canAddEntry: () => false,
 *       getEntryId: (e) => e.id,
 *       data: {
 *         data: {
 *           entries: []
 *         }
 *       }
 *     }
 *   },
 *   mocks: {
 *     $t: (key) => key
 *   }
 * }
 * ```
 * The default option object is merged with the `option` parameter.
 *
 * @param options an optional option object use to customize the initialized component
 * @returns {*} a shallow wrapper for the LayoutTable component
 */
function initWrapper(options) {
  return shallowMount(LayoutTable, _.merge({
    provide: {
      logic: {
        canAddEntry: () => false,
        getEntryId: (e) => e.id,
        data: {
          data: {
            entries: []
          }
        }
      }
    },
    mocks: {
      $t: (key) => key
    }
  }, options))
}

describe('LayoutTable.vue', () => {
  it('Renders when no entries', () => {
    const wrapper = initWrapper();
    expect(wrapper.find('.noentries-table').text()).toBe('livedata.bottombar.noEntries');
  })

  it('Renders with some entries', () => {
    const wrapper = initWrapper({
      provide: {
        logic: {
          data: {
            data: {
              entries: [
                {id: 1}
              ]
            }
          }
        }
      }
    });
    let rows = wrapper.findAllComponents(LayoutTableRow);
    expect(rows.length).toBe(1)
    expect(rows.at(0).props()).toStrictEqual({entry: {id: 1}})
    expect(wrapper.find('.noentries-card').exists()).toBe(false)
  })
})