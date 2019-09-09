<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col :cols="$vuetify.breakpoint.smAndUp ? 6 : 12">
      <p class="display-1">Get in touch !</p>
      <p class="subtitle-2 grey--text text--darken-1">
        Feel free to send me a message
      </p>
      <v-form ref="form" v-model="valid">
        <v-text-field
          ref="emailField"
          v-model="email"
          :rules="emailRules"
          label="Your E-mail"
          required
          filled
          rounded
          clearable
          validate-on-blur
          prepend-icon="mdi-at"
        ></v-text-field>

        <v-text-field
          ref="subjectField"
          v-model="subject"
          :rules="subjectRules"
          label="Subject"
          required
          filled
          rounded
          clearable
          validate-on-blur
          prepend-icon="mdi-bullseye-arrow"
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
        ></v-textarea>
        <v-row justify="end" align="center">
          <v-btn
            :disabled="!valid"
            color="accent"
            class="mr-4"
            :loading="sending"
            @click="sendMail"
          >
            <v-icon class="mr-3">mdi-send</v-icon>Send
          </v-btn>
        </v-row>
      </v-form>
      <v-snackbar v-model="error" absolute color="error" :timeout="10000">
        <v-row justify="space-between" align="center" class="px-4">
          <p class="red--text text--lighten-5 body-2" v-html="errorMessage"></p>
          <v-btn dark text @click="error = false">Close</v-btn>
        </v-row>
      </v-snackbar>
      <v-snackbar v-model="success" absolute color="success" :timeout="10000">
        <v-row justify="space-between" align="center" class="px-4">
          <p class="green--text text--lighten-5 body-2">
            Email successfully sent !
          </p>
          <v-btn dark text @click="success = false">Close</v-btn>
        </v-row>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact'
    }
  },
  data: () => ({
    sending: false,
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
    ],
    error: false,
    errorMessage: '',
    success: false
  }),
  methods: {
    async sendMail() {
      const isFormValid = this.$refs.form.validate()
      if (isFormValid) {
        this.sending = true
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              subject: this.subject,
              email: this.email,
              message: this.message
            })
          })

          const json = await response.json()

          if (json.error) {
            this.showError(
              '<strong>Oups !</strong> 😐, something went wrong. <br />Reach me on <a class="white--text" href="https://www.linkedin.com/in/cl%C3%A9ment-kiritchouk-46a666127/" target="_blank">LinkedIn</a> 😊'
            )
          } else {
            this.success = true
            this.clear()
          }
        } catch (error) {
          this.showError(
            '<strong>Oups !</strong> 😐, something went wrong. <br />Reach me on <a class="white--text" href="https://www.linkedin.com/in/cl%C3%A9ment-kiritchouk-46a666127/" target="_blank">LinkedIn</a> 😊'
          )
        }
      } else {
        this.showError('Form is invalid 🤔')
      }
      this.sending = false
    },
    showError(message) {
      this.errorMessage = message
      this.error = true
    },
    clear() {
      this.$refs.form.reset()
    }
  },
  transition: {
    name: 'fade'
  }
}
</script>

<style lang="scss" scoped></style>
