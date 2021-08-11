<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
                outlined
                @input="$emit('update:lastName', $event)"
                :value="name"
                :rules="[(val) => !!val || 'Field is required']"
                label="Name"
                class="col"
            >
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
    props: ["name"],
};
</script>

<style></style>
