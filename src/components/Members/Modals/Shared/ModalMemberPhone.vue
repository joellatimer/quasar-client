<template>
    <q-item-section>
        <div class="row q-mb-sm">
            <q-input
                outlined
                @input="$emit('update:phone', $event)"
                :value="phone"
                label="Phone"
                mask="(###) ### ####"
                class="col"
            >
            </q-input>
        </div>
    </q-item-section>
</template>

<script>
export default {
    props: ["phone"],
};
</script>

<style></style>
