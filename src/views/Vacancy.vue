<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{{ pageTitle }}</h4>
                    <h6 class="card-subtitle">List of ticket opend by customers</h6>
                    <div class="row m-t-40">
                        <div class="col-md-6 col-lg-3 col-xlg-3">
                            <div class="card card-inverse card-info">
                                <div class="box bg-info text-center">
                                    <h1 class="font-light text-white">2,064</h1>
                                    <h6 class="text-white">Total Tickets</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 col-xlg-3">
                            <div class="card card-success card-inverse">
                                <div class="box text-center">
                                    <h1 class="font-light text-white">1,738</h1>
                                    <h6 class="text-white">Responded</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 col-xlg-3">
                            <div class="card card-inverse card-danger">
                                <div class="box text-center">
                                    <h1 class="font-light text-white">1100</h1>
                                    <h6 class="text-white">Resolve</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 col-xlg-3">
                            <div class="card card-inverse card-dark">
                                <div class="box text-center">
                                    <h1 class="font-light text-white">964</h1>
                                    <h6 class="text-white">Pending</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pull-left">
                            <button type="button" class="btn btn-info btn-rounded">Add New Contact</button>
                        </div>
                        <div class="pull-right btn-group" data-toggle="buttons" role="group">
                            <label class="btn btn-outline btn-info">
                                <input type="radio" name="options" autocomplete="off" value="male" checked="">
                                <i class="ti-check text-active" aria-hidden="true"></i> Male
                            </label>
                            <label class="btn btn-outline btn-info active">
                                <input type="radio" name="options" autocomplete="off" value="female">
                                <i class="ti-check text-active" aria-hidden="true"></i> Female
                            </label>
                            <label class="btn btn-outline btn-info">
                                <input type="radio" name="options" autocomplete="off" value="n/a">
                                <i class="ti-check text-active" aria-hidden="true"></i> N/A
                            </label>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="demo-foo-addrow" class="table m-t-30 table-hover no-wrap contact-list" data-page-size="10">

                            <thead>
                            <tr>
                                <th>ID #</th>
                                <th>Opened By</th>
                                <th>Sbuject</th>
                                <th>Status</th>
                                <th>Assign to</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1011</td>
                                    <td>
                                        <a href="javascript:void(0)">Genelia Deshmukh</a>
                                    </td>
                                    <td>How to customize the template?</td>
                                    <td><span class="label label-warning">New</span> </td>
                                    <td>Johnathon</td>
                                    <td>14-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete">
                                            <i class="ti-close" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1224</td>
                                    <td>
                                        <a href="javascript:void(0)">Ritesh Deshmukh</a>
                                    </td>
                                    <td>How to change colors</td>
                                    <td><span class="label label-success">Complete</span> </td>
                                    <td>Salman khan</td>
                                    <td>13-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1024</td>
                                    <td>
                                        <a href="javascript:void(0)">Govinda Mauli</a>
                                    </td>
                                    <td>How to set Horizontal nav</td>
                                    <td><span class="label label-success">Complete</span> </td>
                                    <td>Hritik Roshan</td>
                                    <td>13-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2124</td>
                                    <td>
                                        <a href="javascript:void(0)">Raja Mauli</a>
                                    </td>
                                    <td>How this will connect with bahubali</td>
                                    <td><span class="label label-inverse">Pending</span> </td>
                                    <td>Hritik Roshan</td>
                                    <td>12-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3124</td>
                                    <td>
                                        <a href="javascript:void(0)">Rana Dagubati</a>
                                    </td>
                                    <td>How to set navigation</td>
                                    <td><span class="label label-success">Complete</span> </td>
                                    <td>Hritik Roshan</td>
                                    <td>12-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1611</td>
                                    <td>
                                        <a href="javascript:void(0)">Tony Deshmukh</a>
                                    </td>
                                    <td>How to customize the template?</td>
                                    <td><span class="label label-warning">New</span> </td>
                                    <td>Johnathon</td>
                                    <td>14-10-2017</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pageTitle: 'Vacancy'
            }
        }
    }
</script>

<style scoped>

</style>