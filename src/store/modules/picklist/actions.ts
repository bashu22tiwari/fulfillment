import { ActionTree } from 'vuex'
import RootState from '@/store/RootState'
import PicklistState from './PicklistState'
import * as types from './mutation-types'
import { PicklistService } from '@/services/PicklistService'
import { hasError, showToast } from '@/utils'
import { translate } from '@/i18n'

const actions: ActionTree<PicklistState, RootState> = {
  async setPicklistSize ({ commit }, payload) {
    commit(types.PICKLIST_SIZE, payload)
  },

  async updateAvailablePickers ({ commit }, payload) {
    let resp;

    try {
      resp = await PicklistService.getAvailablePickers(payload);
      if (resp.status === 200 && resp.data.count > 0 && !hasError(resp)) {
        commit(types.PICKLIST_PICKERS_UPDATED, {pickers: resp.data.docs})
      } else {
        showToast(translate('Something went wrong'))
      }
    } catch (err) {
      console.error(translate('Something went wrong'))
    }

    return resp;
  },

  async createPicklist ({ commit }, payload) {
    let resp;

    try {
      resp = await PicklistService.createPicklist(payload);
      if (resp.status === 200 && !hasError(resp)) {
        console.log(resp)
      } else {
        showToast(translate('Something went wrong'))
      }
    } catch (err) {
      showToast(translate('Something went wrong'))
    }
  }
}

export default actions;