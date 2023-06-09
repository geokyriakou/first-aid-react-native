import { View, Text, FlatList } from "react-native";

const HeartAttack = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignSelf: "center", fontSize: 14, fontWeight: "bold" }}>
        ΧΡΗΣΗ ΑΥΤΟΜΑΤΟΥ ΕΞΩΤΕΡΙΚΟΥ ΑΠΙΝΙΔΩΤΗ ΣΕ ΕΝΗΛΙΚΕΣ{" "}
      </Text>
      <FlatList
        data={[
          {
            id: 1,
            key: "Μεγάλη προσοχή πρέπει να δοθεί στο ότι πρέπει να βρισκόμαστε σε χώρο που δεν έχει νερά και μεταλλικές επιφάνειες.",
          },
          {
            id: 2,
            key: "Σε αυτόν που θα έρθει να μας βοηθήσει ζητάμε να μας φέρει τον Αυτόματο Εξωτερικό Απινιδωτή. ",
          },
          {
            id: 3,
            key: "Εμείς συνεχίζουμε κανονικά την ΚΑΡΠΑ (30/2). ",
          },
          {
            id: 4,
            key: "Μόλις έρθει ο απινιδωτής χωρίς να σταματάμε την ΚΑΡΠΑ, καθοδηγούμε το βοηθό μας εάν δε γνωρίζει πώς να τον εφαρμόσει ",
          },
          {
            id: 5,
            key: "Μερικοί απινιδωτές ανοίγουν μόνοι τους σηκώνοντας το καπάκι και άλλοι με έναν διακόπτη. Μετά ακολουθούμε τις οδηγίες που αυτός μας δίνει ",
          },
          {
            id: 6,
            key: "Στο γυμνό και στεγνό θώρακα του θύματος το ένα αυτοκόλλητο ηλεκτρόδιο το βάζουμε αριστερά μια παλάμη κάτω από την μασχάλη και το άλλο λίγο πιο κάτω από την δεξιά κλείδα.",
          },
          {
            id: 7,
            key: "Βάζουμε στην υποδοχή του απινιδωτή το βύσμα των ηλεκτροδίων και σε λίγο μας λέει ότι αναλύει το καρδιακό ρυθμό του θύματος.",
          },
          {
            id: 8,
            key: "Απομακρύνουμε τον κόσμο και δεν ακουμπάμε ούτε εμείς, φωνάζοντας: «μην ακουμπάει κανείς, αναλύει ρυθμό» ",
          },
          {
            id: 9,
            key: "Μετά την ανάλυση του καρδιακού ρυθμού του θύματος και εφόσον ο απινιδωτής διαγνώσει απινιδώσιμο ρυθμό αρχίζει να φορτίζει και όταν είναι έτοιμο ακούγεται ένας χαρακτηριστικός ήχος και μια σχετική φωτεινή ένδειξη. ",
          },
          {
            id: 10,
            key: "Τότε φωνάζουμε: «απομακρυνθείτε θα δώσω ηλεκτρικό ρεύμα». ",
          },
          {
            id: 11,
            key: "Όταν βεβαιωθούμε ότι δεν ακουμπάει κανείς και ούτε εμείς ακουμπάμε τότε πατάμε το αντίστοιχο κουμπί και δίνουμε την ηλεκτρική εκκένωση. ",
          },
          {
            id: 12,
            key: "Μετά την απινίδωση ακολουθούμε τις οδηγίες του απινιδωτή. ",
          },
          {
            id: 13,
            key: "Εάν στην ανάλυση του ρυθμού δεν διαγνωσθεί απινιδώσιμος ρυθμός τότε ακολουθούμε τις οδηγίες του απινιδωτή ",
          },
          {
            id: 14,
            key: "Εάν το θύμα αρχίσει να αναπνέει φυσιολογικά τότε το τοποθετούμε στην πλάγια θέση ασφαλείας χωρίς να ξεκολλήσουμε τα αυτοκόλλητα ηλεκτρόδια.",
          },
        ]}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontWeight: "bold", color: "green", fontSize: 30 }}>
              Βήμα {item.id}:
            </Text>
            <View
              style={{
                marginBottom: 10,
                //   padding: 10,
                //   fontSize: 18,
                //   height: 60,
                //   justifyContent: "center",
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "space-between",
                borderBottomWidth: 0.2,
              }}
              key={item}
            >
              <Text style={{ fontSize: 20 }}>{item.key}</Text>
            </View>
          </View>
        )}
      />
      {/* Για παιδια από 1-8 ετών: Τα
        ηλεκτρόδια τοποθετούνται μπροστά στο στέρνο και πίσω στην πλάτη. Χρήση
        παιδιατρικών ηλεκτροδίων σε περίπτωση που είναι διαθέσιμα
      </Text> */}
    </View>
  );
};

export default HeartAttack;
