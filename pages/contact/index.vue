<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-form v-model="valid" lazy-validation>
        <v-text-field
          ref="emailField"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          filled
          rounded
          validate-on-blur
          clearable
        ></v-text-field>

        <v-text-field
          ref="subjectField"
          v-model="subject"
          :rules="subjectRules"
          label="Subject"
          required
          filled
          rounded
          validate-on-blur
          clearable
        ></v-text-field>
        <v-textarea
          ref="messageField"
          v-model="message"
          :rules="messageRules"
          label="Message"
          required
          filled
          rounded
          clearable
          height="100%"
          @blur="validate"
        ></v-textarea>

        <v-btn :disabled="!valid" color="success" class="mr-4">
          <v-icon class="mr-3">mdi-send</v-icon>Send
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    subject: '',
    subjectRules: [
      (v) => !!v || 'Subject is required',
      (v) => (v && v.length >= 3) || 'Subject must be more than 3 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length >= 10) || 'Message must be more than 10 characters'
    ]
  }),
  mounted() {
    this.valid = false
  },
  methods: {
    validate() {
      this.valid = true
      // eslint-disable-next-line no-console
      console.log({
        emailField: this.$refs.emailField,
        subjectField: this.$refs.subjectField,
        messageField: this.$refs.messageField
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
