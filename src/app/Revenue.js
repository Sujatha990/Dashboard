import React from 'react'

const Revenue = () => {
  return (
    <div>
       <div class="dashboard-container">
        <div class="container">
            <h2 class="my-4" style={{textAlign:"center",color:"rebeccapurple"}}>Revenue Report </h2>
            <div class="table-container">
                <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Invoice Number</th>
                            <th>Date of Invoice</th>
                            <th>Subscription Type</th>
                            <th>Transaction ID</th>
                            <th>Receipt Number</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>John Doe</td>
                            <td>INV12345</td>
                            <td>2024-08-23</td>
                            <td>Premium</td>
                            <td>TXN98765</td>
                            <td>RCPT54321</td>
                            <td>Rs.100.00</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Jane Smith</td>
                            <td>INV12346</td>
                            <td>2024-08-22</td>
                            <td>Standard</td>
                            <td>TXN98766</td>
                            <td>RCPT54322</td>
                            <td>Rs.50.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Revenue
