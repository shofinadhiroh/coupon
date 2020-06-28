import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Notification from "../views/Notification.vue";
import Sendnotif from "../views/Sendnotif.vue";
import Coupon from "../views/Coupon.vue";
import Partner from "../views/Partner.vue";
import Member from "../views/Member.vue";
import Payment from "../views/Payment.vue";
import Memberdetail from "../views/Memberdetail.vue";
import Coupondetail from "../views/Coupondetail.vue";
import Partnerdetail from "../views/Partnerdetail.vue";
import Editpayment from "../views/Editpayment.vue";
import Addpayment from "../views/Addpayment.vue";
import Addmember from "../views/Addmember.vue";
import Editmember from "../views/Editmember.vue";
import Addcoupon from "../views/Addcoupon.vue";
import Editcoupon from "../views/Editcoupon.vue";
import Addpartner from "../views/Addpartner.vue";
import Editpartner from "../views/Editpartner.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "home"
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/notification',
            name: 'notification',
            component: Notification
        },
        {
            path: '/sendnotif',
            name: 'sendnotif',
            component: Sendnotif
        },
        {
            path: '/coupon',
            name: 'coupon',
            component: Coupon
        },
        {
            path: '/partner',
            name: 'partner',
            component: Partner
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/paymentcode',
            name: 'paymentcode',
            component: Payment
        },
        {
            path: '/memberdetail',
            name: 'memberdetail',
            component: Memberdetail
        },
        {
            path: '/coupondetail',
            name: 'coupondetail',
            component: Coupondetail
        },
        {
            path: '/partnerdetail',
            name: 'partnerdetail',
            component: Partnerdetail
        },
        {
            path: '/editpayment',
            name: 'editpayment',
            component: Editpayment
        },
        {
            path: '/addpayment',
            name: 'addpayment',
            component: Addpayment
        },
        {
            path: '/addmember',
            name: 'addmember',
            component: Addmember
        },
        {
            path: '/editmember',
            name: 'editmember',
            component: Editmember
        },
        {
            path: '/addcoupon',
            name: 'addcoupon',
            component: Addcoupon
        },
        {
            path: '/editcoupon',
            name: 'editcoupon',
            component: Editcoupon
        },
        {
            path: '/addpartner',
            name: 'addpartner',
            component: Addpartner
        },
        {
            path: '/editpartner',
            name: 'editpartner',
            component: Editpartner
        },
    ]
})
