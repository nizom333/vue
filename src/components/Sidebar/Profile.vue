<template>
    <div class="user-profile">
        <div class="profile-img">
            <img src="" alt="user"/>
            <div class="notify setpos">
                <span class="heartbit"></span>
                <span class="point"></span>
            </div>
        </div>
        <div class="profile-text">
            <h5>Markarn Doe</h5>
            <a href="" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="true">
                <i class="mdi mdi-settings"></i>
            </a>
            <a href="" data-toggle="tooltip" title="Email">
                <i class="mdi mdi-gmail"></i>
            </a>
            <a href="" data-toggle="tooltip" title="Logout">
                <i class="mdi mdi-power"></i>
            </a>
            <div class="dropdown-menu animated flipInY">
                <a class="dropdown-item">
                    <i class="ti-user"></i> My Profile
                </a>
                <a class="dropdown-item">
                    <i class="ti-wallet"></i> My Balance
                </a>
                <a class="dropdown-item">
                    <i class="ti-email"></i> Inbox
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                    <i class="ti-settings"></i> Account Setting
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                    <i class="fa fa-power-off"></i> Logout
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>