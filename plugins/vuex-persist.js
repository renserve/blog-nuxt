import createPersistedState from 'vuex-persistedstate';

export default (context) => {
    //todo app.isMoodList存储刷新报错,渲染不支持ssr
    createPersistedState({
        key: 'journey',
        paths:['app.params','app.token','app.theme','app.clientNavList'],
    })(context.store || context);
};

