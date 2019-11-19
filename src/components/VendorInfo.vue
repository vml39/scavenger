<template>
  <div class="vendorinfo">
    <h1>{{ theme }}</h1>
    <ul>
      <li :key="vendorinfo" v-for="vendorinfo in vendorinfos">
        {{ vendorinfo }}
      </li>
    </ul>
    <v-dialog>
        <v-card>
            <v-card-title>
                <h2>View Vendor Info</h2>
            </v-card-title>
        </v-card>
    </v-dialog>
  </div>
</template>