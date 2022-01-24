<template>
    <div v-for="(blog, i) in blogData" :key="i">
        <h5>{{ blog.title }}</h5>
        <p>{{ blog.content }}</p>
        <p>{{ blog.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'list',
    props: [
        'blogData'
    ],
    components: {

    },
    
}
</script>

<style>

</style>