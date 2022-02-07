<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{ blogData[$route.params.num].title }}</h5>
        <p>{{ blogData[$route.params.num].content }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'blogData'
    ]
    
}
</script>