import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostEdit from "../pages/post/PostEdit";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";
import Profile from "../pages/user/Profile";
import UserList from "../pages/user/UserList";
import UserCreateConfirm from "../pages/user/CreateConfirm";
import PostCreateConfirm from "../pages/post/CreateConfirm";
import UserUpdateConfirm from "../pages/user/UpdateConfirm";
import PostUpdateConfirm from "../pages/post/UpdateConfirm";
import Upload from "../pages/post/Upload";
import ChangePassword from "../pages/user/ChangePassword";
import Common from "../pages/user/Common";
import DetailUser from "../pages/user/Detail";
import DetailPost from "../pages/post/Detail";

 import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/posts",
        redirect: "/post/list",
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/edit",
        name: "post-edit",
        component: PostEdit,
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/edit",
        name: "user-edit",
        component: UserEdit,
    },
    {
        path: "/user/profile",
        name: "user-profile",
        component: Profile,
    },
    {
        path: "/users",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/create-confirm",
        name: "user-create-confirm",
        component: UserCreateConfirm,
    },
    {
        path: "/post/create-confirm",
        name: "post-create-confirm",
        component: PostCreateConfirm,
    },
    {
        path: "/user/update-confirm",
        name: "user-update-confirm",
        component: UserUpdateConfirm,
    },
    {
        path: "/post/update-confirm",
        name: "post-update-confirm",
        component: PostUpdateConfirm,
    },
    {
        path: "/post/upload",
        name: "post-upload",
        component: Upload,
    },
    {
        path: "/user/change-password",
        name: "change-password",
        component: ChangePassword,
    },
    {
        path: "/home",
        name: "homeCommon",
        component: Common,
    },
    {
        path: "/user/detail",
        name: "user-detail",
        component: DetailUser,
    },
    {
        path: "/post/detail",
        name: "post-detail",
        component: DetailPost,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    if (!loggedIn && to.name != "login") {
        return next("/login");
    }
    next();
});

export default router;
