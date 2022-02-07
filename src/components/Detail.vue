<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{ blogData[$route.params.num].title }}</h5>
        <p>{{ blogData[$route.params.num].content }}</p>
    </div>
    <p>{{ $route.fullPath }}</p>
    
    <router-link :to="{path: `/list/${$route.params.num}/author`}">작가</router-link>
    <router-link :to="{path: `/list/${$route.params.num}/comment`}">댓글</router-link>
    <router-view></router-view>
</template>

<script>
export default {
    props: [
        'blogData'
    ]
    
}
</script>