<template src="./garden.html"></template>

<script>
export default {
    methods: {
        toPage(page) {
            this.$router.push("/"+ page);
        },
    }
}
</script>

<style scoped>
p {
    text-align: center;
}

.menu {
    animation: fadeIn 2s ease 0s 1 normal;
    width: 200px;
}
</style>
