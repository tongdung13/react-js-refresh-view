import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({ family: 'Roboto' });
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
    border: "1px solid black",
   
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
    fontFamily: "Roboto"
  },
  header: {
    display: "flex",
    border: "1px solid black",
  },
});

const headers = [
  "STT",
  "Loại",
  "Đại lý",
  "Thời gian thực hiện",
  "Tổng thời gian",
  "Kết quả",
];

// Create Document Component
function MyDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {Array.isArray(headers) &&
              headers.map((header) => {
                return <Text style={styles.header}>{header}</Text>;
              })}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
