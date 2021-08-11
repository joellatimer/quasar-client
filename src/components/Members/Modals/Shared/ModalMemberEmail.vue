<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
                outlined
                @input="$emit('update:email', $event)"
                :value="email"
                label="Email"
                class="col"
            >
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
    props: ["email"],
};
</script>

<style></style>
