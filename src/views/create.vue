<template>
  <div class="wrapper">
    <div class="add-item-form">
        <div class="inner-wrapper">
            <div class="input-fields">
            <label for="name">Item Name</label>
            <input v-model="itemName" type="text" id="name" class="input" placeholder="Name, Label, Nombre">
            <label for="exp_date">Expiration Date</label>
            <input v-model="date" type="date" id="exp_date" class="input">
            <label for="qnty">Quantity</label>
            <input v-model="amount" type="text" id="qnty" class="input" placeholder="Amount">
            <label for="genres">Genre</label>
            <select name="genres" id="genres" v-model="genre">
                <option v-for="elem in this.$root.$data.genres" :key="elem">{{elem}}</option>
            </select>
            </div>
            <button @click="add_to_pantry()" class="btn btn-secondary">Add Item</button>
        </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Create',
    data() {
        return {
            itemName: '',
            amount: '',
            date: '',
            genre: ''
        }
    },
    methods: {
        add_to_pantry() {
            let item_id = 0;
            let itms = this.$root.$data.items;
            for (let i = 0; i < itms.length; i++) {
                if (item_id <= itms[i].id) {
                    item_id = itms[i].id + 1;
                }
            }
            let new_item = {
                id: item_id,
                name: this.itemName,
                expiration: this.date,
                quantity: parseInt(this.amount),
                genre: this.genre.toLowerCase()
            };
            this.$root.$data.items.push(new_item);
            this.date = '';
            this.itemName = '';
            this.amount = '';
        }
    }
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.wrapper {
    background: url('../../public/images/background_pantry.jpg') no-repeat;
    background-position: top center;
    background-size: cover;
    height: 100vh;
    position: relative;
}

.add-item-form {
    position: absolute;
    top: 50%;
    width: 100%;
    padding:0 20px;
    transform: translateY(-50%)
}

.inner-wrapper {
    max-width: 550px;
    margin: 0 auto;
    background: rgba(0,0,0,0.8);
    padding: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px;
}

.input-fields {
    display: flex;
    flex-direction: column;
    margin-right: 4%;
}

.input {
    margin-bottom: 28px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #c5ecfd;
    color: #c5ecfd;
}

.inner-wrapper label {
    color: #c5ecfd;
}

select {
    border: 0;
    margin-bottom: 28px;
    background: transparent;
    border-bottom: 2px solid #c5ecfd;
    color: #c5ecfd;
}

option {
    background-color: rgba(0,0,0,0.8);
    border: 0;
}

.btn {
    color: #c5ecfd;
}


</style>