import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Banner: {
    height: "20%",
    width: "100%",
  },

  profileCircle: {
    height: 25,
    width: 25,
    borderRadius: "70%",
    backgroundColor: "#b22222",
  },

  card: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 16,
    gap: 2,
  },

  container: {
    height: "80%",
    width: "100%",
    backgroundColor: "#161415",
    alignItems: "center",
    justifyContent: "center",
  },

  subContainer: {
    gap: 8,
  },

  subtitle: {
    color: "#fefefe",
    fontSize: 18,
    fontWeight: 600,
  },

  subText: {
    color: "#fefefe",
    fontSize: 16,
  },

  editProfile: {
    height: "5%",
    width: "90%",
    borderRadius: 25,
    backgroundColor: "#67666B",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 20,
  },

  orbsBar: {
    height: "12%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    margin: 10,
  },

  orbsAmount: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 25,
  },

  orbsText: {
    color: "#fefefe",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 5,
  },
  orbsIcon: {
    color: "#fefefe",
    fontSize: 25,
    fontWeight: "600",
  },

  aboutMe: {
    gap: 25,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    padding: 20,
    margin: 10,
  },

  connections: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#0A0A0A",
    padding: 20,
    margin: 10,
  },

  connectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 18,
  },

  connectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  connectionName: {
    color: "#fefefe",
    fontSize: 16,
    fontWeight: "600",
  },

  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  },

  verifiedText: {
    color: "#1E1E1E",
    fontSize: 10,
    fontWeight: "600",
  },

  arrow: {
    color: "#fefefe",
    fontSize: 20,
  },

  appIcon: {
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#1E1E1E",
    marginLeft: 35,
  },
});
