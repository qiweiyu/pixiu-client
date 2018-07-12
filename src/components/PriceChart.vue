<template>
  <div>
    <line-chart v-if="dataObj" :data="dataObj"></line-chart>
  </div>
</template>

<script>
  import LineChart from '@/components/LineChart';
  import md5 from 'md5';
  import moment from 'moment';

  import utils from '@/libs/utils';

  export default {
    name: 'PriceChart',
    data() {
      return {
        dataObj: null,
      };
    },
    props: ['symbol'],
    components: {
      LineChart,
    },
    methods: {
      async fetchPrice(symbol) {
        const data = await utils.getData(`/api/history/${symbol}`);
        const labels = [];
        const dataList = [];
        data.forEach(item => {
          labels.push(moment(new Date(item.time)).format('YYYY-MM-DD'));
          dataList.push(item.price);
        });
        this.dataObj = {
          labels: labels,
          datasets: [
            {
              label: symbol.toUpperCase() + ' Price USD',
              backgroundColor: '#' + md5(symbol).substr(0, 6),
              data: dataList,
            },
          ],
        };
      },
    },
    mounted() {
      this.fetchPrice(this.symbol);
    },
  };
</script>
