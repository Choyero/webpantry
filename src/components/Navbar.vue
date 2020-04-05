<template>
    <div class="Navigation">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">Web Pantry<img src="../../public/images/avocado.png"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/">
                        <p>My Pantry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create">
                        <p>Add item</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Browse">
                        <p>Browse By Genre</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>

<script>
export default {
    name: "Navigation",
    props: {
        msg: String
    }
};
</script>

<style scoped>

*{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(77, 74, 74);
}
.navbar-brand {
    font-weight: 500;
}

.navbar-brand img {
    margin-left: 10px;
}

.nav-item {
    margin-left: 25px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 0;
}

.nav-item p {
    margin: 0px 0px 0px 0px;
    font-weight: 400;
}
</style>