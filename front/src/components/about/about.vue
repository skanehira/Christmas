<template src="./about.html"></template>

<script>
export default {
    methods:{
        toTop(){
            this.$router.push("/")
        },
    }
}

</script>

<style scoped>
.about {
    animation: fadeIn 2s ease 0s 1 normal;
}

.box {
    border-radius: 4px;
    background: #e5e9f2;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

p {
    text-align: left;
    white-space: pre-wrap;
    word-wrap : break-word;
    overflow-wrap : break-word;
}
</style>
