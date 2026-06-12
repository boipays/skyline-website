import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6D28D9",
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    color: "#6B7280",
  },
  value: {
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  total: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export const InvoicePDF = ({ invoice }: any) => (
  <Document>
    <Page style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.brand}>Boipays Invoice</Text>
        <Text>Financial OS for African SMEs</Text>
      </View>

      {/* INVOICE DETAILS */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Invoice ID:</Text>
          <Text style={styles.value}>{invoice.id}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Customer:</Text>
          <Text style={styles.value}>{invoice.customerEmail}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Plan:</Text>
          <Text style={styles.value}>{invoice.plan}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* FINANCIAL BREAKDOWN */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text>Amount</Text>
          <Text>{invoice.amount}</Text>
        </View>

        <View style={styles.row}>
          <Text>VAT</Text>
          <Text>{invoice.vat}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>{invoice.total}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* FOOTER */}
      <View style={styles.section}>
        <Text>Thank you for using Boipays.</Text>
        <Text>Automating finance for African businesses.</Text>
      </View>
    </Page>
  </Document>
);