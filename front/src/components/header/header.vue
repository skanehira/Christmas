<template src="./header.html"></template>

<script>
export default {
    methods: {
        toPage: function(page) {
            this.$router.push(page)
        },
    }
}
</script>


<style scoped>
p {
    text-align: center;
}

.logo {
    animation: fadeIn 2s ease 0s 1 normal;
    width: 345px;
}

</style>
