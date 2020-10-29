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
require.config({
  paths: {
    Logic: "$services.webjars.url('org.xwiki.platform:xwiki-platform-livedata-webjar', 'Logic.min.js')",
    Vue: "$services.webjars.url('vue', 'vue.runtime.min.js')",
    'xwiki-livedata': $jsontool.serialize($services.webjars.url('org.xwiki.platform:xwiki-platform-livedata-webjar',
      'xwiki-livedata.umd.min.js'))
  }
});

require(['jquery', 'Logic'], function($, LiveData) {
  "use strict";

  $.fn.liveData = function(config) {
    return this.each(function() {
      if (!$(this).data('liveData')) {
        var instanceConfig = $.extend($(this).data('config'), config);
        $(this).attr('data-config', JSON.stringify(instanceConfig)).data('liveData', LiveData(this));
      }
    });
  };

  var init = function(event, data) {
    var container = $((data && data.elements) || document);
    container.find('.liveData').liveData();
  };

  $(document).on('xwiki:dom:updated', init);
  $(init);
});
