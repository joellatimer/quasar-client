<template>
    <q-card>
        <modal-header>Add a Member</modal-header>

        <q-form @submit.prevent="submitForm">
            <q-card-section>
                <modal-member-first-name
                    :firstName.sync="memberToSubmit.firstName"
                    ref="modalMemberFirstName"
                />
                <modal-member-last-name
                    :lastName.sync="memberToSubmit.lastName"/>
                <modal-member-email 
                    :email.sync="memberToSubmit.email" />
                <modal-member-phone 
                    :phone.sync="memberToSubmit.phone" />
            </q-card-section>

            <modal-button></modal-button>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            memberToSubmit: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        ...mapActions("members", ["addMember"]),
        submitForm() {
            // this.$refs.modalTaskFirstName.$refs.firstName.validate()
            // if (!this.$refs.firstName.hasError) {

            // }
            this.submitMember();
        },
        submitMember() {
            this.addMember(this.memberToSubmit);
            this.$emit("close");
        },
    },
    components: {
        "modal-header": require("components/Members/Modals/Shared/ModalHeader.vue")
            .default,
        "modal-member-first-name": require("components/Members/Modals/Shared/ModalMemberFirstName.vue")
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
};
</script>
