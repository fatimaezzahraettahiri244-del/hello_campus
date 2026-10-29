import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

const disponibles = produits.filter((p) => p.stock > 0);
const valeurTotaleStock = produits.reduce((total, p) => total + p.prix * p.stock, 0);

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>CampusStock - Catalogue</Text>
      <Text style={styles.info}>Produits disponibles : {disponibles.length}</Text>
      <Text style={styles.info}>Valeur totale du stock : {valeurTotaleStock} MAD</Text>
      
      <Text style={styles.sousTitre}>Liste des produits :</Text>
      {produits.map((p) => (
        <Text key={p.id} style={styles.ligne}>
          {p.nom} - {p.prix} MAD ({p.stock > 0 ? `${p.stock} en stock` : 'Rupture'})
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F6F8',
  },
  titre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A2B4C',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 6,
  },
  sousTitre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002350',
    marginTop: 16,
    marginBottom: 8,
  },
  ligne: {
    fontSize: 15,
    paddingVertical: 4,
    color: '#333',
  },
});




