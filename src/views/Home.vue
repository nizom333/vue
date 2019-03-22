<template>
    <div class="main-charts">
        <card></card>
        <div class="row">
            <line-chart></line-chart>
            <material-chart></material-chart>
        </div>
    </div>
</template>

<script>
import Card from '../components/Charts/Card'
import LineChart from '../components/Charts/LineChart'
import MaterialChart from '../components/Charts/MaterialChart'

export default {
  components: {
      Card,
      LineChart,
      MaterialChart,
  }
}
</script>
