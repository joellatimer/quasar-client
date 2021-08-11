<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
                outlined
                @input="$emit('update:firstName', $event)"
                :value="firstName"
                :rules="[(val) => !!val || 'Field is required']"
                ref="firstName"
                autofocus
                label="First Name"
                class="col"
            >
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
    props: ["firstName"],
};
</script>

<style></style>
