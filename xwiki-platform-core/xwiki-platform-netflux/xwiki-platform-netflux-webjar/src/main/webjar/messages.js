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
define(function () {
  'use strict';

  // FIXME: Load the translation messages asynchronously using the dedicated REST API.
  if (document.documentElement.lang === 'fr') {
    return {
      'errorBox_errorType_disconnected': 'Connection Perdue',
      'errorBox_errorExplanation_disconnected': [
        'La connection au serveur a été perdue, vous pouvez vous reconnecter en rechargeant la page ',
        'en cliquant en dehors de cette boîte de dialogue.'
      ].join(''),
      editingAlone: 'Edition seul(e)',
      editingWithOneOtherPerson: 'Edition avec une autre personne',
      editingWith: 'Edition avec',
      otherPeople: 'autres personnes',
      disconnected: 'Déconnecté',
      synchronizing: 'Synchronisation',
      reconnecting: 'Reconnection...',
      lag: 'Lag',
      initialState: [
        '<p>',
        '</p>',
      ].join(''),
      codeInitialState: [
        '\n'
      ].join('')
    };
  } else {
    return {
      'errorBox_errorType_disconnected': 'Connection Lost',
      'errorBox_errorExplanation_disconnected': [
        'Lost connection to server, you may reconnect by reloading the page or review your work ',
        'by clicking outside of this box.'
      ].join(''),
      editingAlone: 'Editing alone',
      editingWithOneOtherPerson: 'Editing with one other person',
      editingWith: 'Editing with',
      otherPeople: 'other people',
      disconnected: 'Disconnected',
      synchronizing: 'Synchronizing',
      reconnecting: 'Reconnecting...',
      lag: 'Lag',
      initialState: [
        '<p>',
        '</p>',
      ].join(''),
      codeInitialState: [
        '\n'
      ].join('')
    };
  }
});