<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col cols="6">
      <p class="display-1">Get in touch !</p>
      <p class="subtitle-2 grey--text text--darken-1">
        Feel free to send me a message
      </p>
      <v-form v-model="valid">
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
          <v-btn :disabled="!valid" color="accent" class="mr-4">
            <v-icon class="mr-3">mdi-send</v-icon>Send
          </v-btn>
        </v-row>
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
  })
}
</script>

<style lang="scss" scoped></style>
