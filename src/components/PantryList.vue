<template>
    <div class="wrapper">
        <div class="pantry">
            <div class="item" v-for="item in items" :key="item.id">
                <div class="info">
                    <h4>{{item.name}}</h4>
                    <div class="extra-info">
                        <p>EXP: {{item.expiration}}</p>
                        <p>{{item.quantity}}x</p>
                    </div>
                </div>
                <div class="image">
                    <img :src="'/images/item/'+item.image">
                </div>
                <div class="quantity">
                    
                    <button @click="dcr_qnty(item)" type="button" class="btn btn-secondary btn-lg">-</button>
                    <button @click="inc_qnty(item)" type="button" class="btn btn-secondary btn-lg">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PantryList',
    props: {
        items: Array
    },
    methods: {
        dcr_qnty(amount) {
            amount.quantity -= 1;
            if (amount.quantity == 0) {
                for (let i = 0; i < this.$root.$data.items.length; i++) {
                    if (this.$root.$data.items[i].id == amount.id) {
                        this.$root.$data.items.splice(i, 1);
                    }
                }
            }
        },
        inc_qnty(amount) {
            amount.quantity += 1;
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pantry {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.extra-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.extra-info p {
    font-size: 18px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.btn {
    width: 50%;
    font-size: 30px;
    font-weight: 300;
}


</style>