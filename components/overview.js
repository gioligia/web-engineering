Vue.component('overview',{
  data: function(){
    return{
      sales_revenue: toKorM(302010000),
      currency: 'CHF',
      customers: toKorM(5350000),
      avg_transaction: toKorM(64.36),
      avg_units: 2.08,
      avg_units_growth: 'img/up.png',
      languages: ['IT', 'DE', 'EN', 'FR'],
      actual_revenue: toKorM(302010000),
      target_revenue: toKorM(260350000),
      target_achievement: formatNumber(302010000/260350000*100),
      gold_partner: 8,
      silver_partner: 55,
      bronze_partner: 100,
      total_spending: formatNumber(2113597),
      savings: formatNumber(96788),
      foregone_savings: formatNumber(52366),
      target_retention: 90
    }
  },
  template:
      `<div>
      <div class="row">
        <div class="col-4 separator-right">
          <p>Days Inventory Outstanding</p>
          <router-link to="/inventory">
            <div class="row">
              <canvas id="inventoryGauge" height="60"></canvas>
            </div>
            <div class="row">
              <canvas id="inventoryGraph"></canvas>
            </div>
          </router-link>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col separator-right">
              <h2>{{ currency }} {{ sales_revenue }} <img src="img/up.png"></h2>
              <br>
              <p>Sales Revenue</p>
            </div>
            <div class="col separator-right">
              <h2>{{ customers }} <img src="img/down.png"></h2>
              <br>
              <p>Customers</p>
            </div>
            <div class="col separator-right">
              <h2>{{ currency }} {{ avg_transaction }} <img src="img/up.png"></h2>
              <br>
              <p>Avg Transaction Value</p>
            </div>
            <div class="col">
              <h2>{{ avg_units }} <img v-bind:src="avg_units_growth"></h2>

              <br>
              <p>Avg Units per Customer</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 separator-right separator-top">
              <p>Sales by Division</p>
              <router-link to="/salesByDivision">
                <div class="row">
                  <canvas id="salesByDivisionGraph" height="165"></canvas>
                </div>
              </router-link>
            </div>
            <div class="col-8 separator-top">
              <p>Customer Retention (target: {{ target_retention }}%)</p>
              <router-link to="/customerRetention">
                <div class="row">
                  <canvas id="customerRetentionGauge" height="40"></canvas>
                </div>
                <div class="row">
                  <canvas id="customerRetentionGraph" height="50"></canvas>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col separator-right separator-top">
          <div class="row">
            <div class="col-4">
              <p>Actual Revenue vs Target</p>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">{{ currency }} {{ actual_revenue }}</th>
                    <td>Actual Revenue</td>
                  </tr>
                  <tr>
                    <th scope="row">{{ currency }} {{ target_revenue }}</th>
                    <td>Target Revenue</td>
                  </tr>
                  <tr>
                    <th scope="row" style="color:green;">{{ target_achievement }}%</th>
                    <td>Target Achievement</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-8">
              <p>Revenue Compared to Previous Year</p>
              <router-link to="/revenue">
                <div class="row">
                  <canvas id="revenueComparisonGraph"></canvas>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col separator-top">
          <p>Sales by Location</p>
          <router-link to="/salesByLocation">
            <div id="regions_div"></div>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col separator-top">
          <p>Supplier Compliance Stats</p>
        </div>
      </div>

      <div class="row">
        <div class="col-5 separator-right separator-top">
          <router-link to="/suppliers">
            <div class="row">
              <div class="col">
                <canvas id="totSuppliersGraph" width="50"></canvas>
              </div>
              <div class="col">
                <canvas id="contractedSuppliersGraph" width="50"></canvas>
              </div>
              <div class="col">
                <canvas id="unlistedSuppliersGraph" width="50"></canvas>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-2 separator-right">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <span><img src="img/gold.png" class="icon">{{ gold_partner }} Gold Partner</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span><img src="img/silver.png" class="icon">{{ silver_partner }} Silver Partner</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span><img src="img/bronze.png" class="icon">{{ bronze_partner }} Bronze Partner</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-5 separator-top">
          <table class="table">
            <tbody>
              <tr>
                <td class="borderless">Total Spending</td>
                <td class="borderless">{{ currency }} {{ total_spending }}</td>
                <td class="borderless">
                  <div>
                    <canvas id="totalSpendingGraph" height="30" width="40"></canvas>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Savings</td>
                <td>{{ currency }} {{ savings }}</td>
                <td>
                  <div>
                    <canvas id="savingsGraph" height="30" width="40"></canvas>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Foregone Saving</td>
                <td>{{ currency }} {{ foregone_savings }}</td>
                <td>
                  <div>
                    <canvas id="foregoneSavingsGraph" height="30" width="40"></canvas>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>`,

})
