<template>
  <div>
    <v-card>
      <price-chart symbol="bitcoin"></price-chart>
    </v-card>
  </div>
</template>

<script>
  import PriceChart from '@/components/PriceChart';

  import utils from '@/libs/utils';

  export default {
    name: 'Index',
    data() {
      return {
      };
    },
    components: {
      PriceChart,
    },
    methods: {
      jumpTo(name) {
        this.$router.push({ name });
      },
    },
  };
</script>

