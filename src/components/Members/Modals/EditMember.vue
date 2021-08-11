<template>
    <q-card>
        <modal-header>Edit a Member</modal-header>

        <q-form @submit.prevent="submitForm">
            <q-card-section>
                <modal-member-name
                    :firstName.sync="memberToSubmit.name"
                    ref="modalMemberName"
                />

                <modal-member-email :email.sync="memberToSubmit.email" />

                <modal-member-phone :phone.sync="memberToSubmit.phone" />
            </q-card-section>

            <modal-button></modal-button>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ["member", "id"],
    data() {
        return {
            memberToSubmit: {},
        };
    },
    methods: {
        ...mapActions("members", ["updateMember"]),
        submitForm() {
            this.$refs.modalMemberName.$refs.name.validate();
            // if (!this.$refs.modalMemberFirstName.$refs.name.hasError) {
            this.submitMember();
            // }
        },
        submitMember() {
            this.updateMember({
                id: this.id,
                updates: this.memberToSubmit,
            });
            this.$emit("close");
        },
    },
    components: {
        "modal-header": require("components/Members/Modals/Shared/ModalHeader.vue")
            .default,
        "modal-member-name": require("components/Members/Modals/Shared/ModalMemberName.vue")
            .default,
        "modal-member-last-name": require("components/Members/Modals/Shared/ModalMemberLastName.vue")
            .default,
        "modal-member-email": require("components/Members/Modals/Shared/ModalMemberEmail.vue")
            .default,
        "modal-member-phone": require("components/Members/Modals/Shared/ModalMemberPhone.vue")
            .default,

        "modal-button": require("components/Members/Modals/Shared/ModalButton.vue")
            .default,
    },
    mounted() {
        this.memberToSubmit = Object.assign({}, this.member);
    },
};
</script>
