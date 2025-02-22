<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ $t("Store Settings") }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label>{{ $t("Store") }}</ion-label>
        <ion-select :placeholder="$t('store name')">
          <ion-select-option>Broadway</ion-select-option>
          <ion-select-option>Garden City</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-card>
        <ion-item lines="none">
          <ion-label class="text-wrap">{{ $t("Documents to print when packing orders") }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>{{ $t("Shipping label") }}</ion-label>
          <ion-checkbox slot="end" />
        </ion-item>
        <ion-item lines="none">
          <ion-label>{{ $t("Packing slip") }}</ion-label>
          <ion-checkbox slot="end" />
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-item lines="none">
          <ion-label>{{ $t("Fulfillment") }} : {{ $t("On") }}</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label class="text-wrap">{{ $t("has outstanding orders and in progress orders.", {storeName: "Broadway", outstandingOrder: 47, progressOrder: 77}) }}</ion-label>
        </ion-item>
        <div class="actions">
          <div>
            <ion-button fill="outline" color="secondary" size="medium">{{ $t("Recycle all open orders") }}</ion-button>
            <ion-button fill="outline" color="secondary" size="medium">{{ $t("Recycle all orders") }}</ion-button>
          </div>
          <div>
            <ion-button fill="outline" color="danger" size="medium">{{ $t("Turn off fulfillment") }}</ion-button>
          </div>
        </div>

        <ion-item class="mobile-only">
          <ion-button fill="clear">{{ $t("Recycle all open orders") }}</ion-button>
          <ion-button slot="end" fill="clear" color="medium" @click="RecyclePopover">
            <ion-icon :icon="ellipsisVerticalOutline" slot="icon-only" />
          </ion-button>
        </ion-item>
      </ion-card>

      <ion-item>
        <ion-label>Asia / Cullcutta</ion-label>
        <ion-button fill="outline">{{ $t("Change") }}</ion-button>
      </ion-item>
      <ion-item>
        <ion-label>Aaron Wanger</ion-label>
        <ion-button fill="outline" color="medium">{{ $t("Logout") }}</ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonButton, 
  IonCard, 
  IonCheckbox, 
  IonContent, 
  IonHeader,
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonSelect, 
  IonSelectOption, 
  IonTitle, 
  IonToolbar,
  popoverController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ellipsisVerticalOutline } from 'ionicons/icons'
import Popover from '@/views/RecyclePopover.vue'

export default defineComponent({
  name: 'Settings',
  components: { 
    IonButton,
    IonCard,
    IonCheckbox,
    IonContent, 
    IonHeader, 
    IonIcon,
    IonItem, 
    IonLabel, 
    IonPage, 
    IonSelect, 
    IonSelectOption,
    IonTitle, 
    IonToolbar
  },
  methods: {
    async RecyclePopover(ev: Event) {
      const popover = await popoverController.create({
        component: Popover,
        event: ev,
        translucent: true,
        showBackdrop: false,
      });
      return popover.present();
    },
  },
  setup() {
    return {
      ellipsisVerticalOutline
    }
  }
});
</script>

<style scoped>
.text-wrap {
  white-space: normal;
}
</style>