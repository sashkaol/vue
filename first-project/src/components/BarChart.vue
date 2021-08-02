<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ["chartData"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>