import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { FlatGrid } from "react-native-super-grid"
import SubmitBtn from "../components/SubmitBtn"
import NotesInput from "../components/NotesInput"
import { date, month, year, hours, min, sec } from "../utils/date"

const moodIcons = [
  {
    id: 1,
    iconName: "Awful",
    icon: require("../assets/moodIcons/mood_awful.png"),
  },
  {
    id: 2,
    iconName: "Bad",
    icon: require("../assets/moodIcons/mood_bad.png"),
  },
  {
    id: 3,
    iconName: "Average",
    icon: require("../assets/moodIcons/mood_average.png"),
  },
  {
    id: 4,
    iconName: "Good",
    icon: require("../assets/moodIcons/mood_good.png"),
  },
  {
    id: 5,
    iconName: "Great",
    icon: require("../assets/moodIcons/mood_great.png"),
  },
]

const activityIcons = [
  {
    id: 1,
    iconName: "Mindfulness",
    icon: require("../assets/moodIcons/activity_meditation.png"),
  },
  {
    id: 2,
    iconName: "Family",
    icon: require("../assets/moodIcons/activity_family.png"),
  },
  {
    id: 3,
    iconName: "Friends",
    icon: require("../assets/moodIcons/activity_friends.png"),
  },
  {
    id: 4,
    iconName: "Romance",
    icon: require("../assets/moodIcons/activity_romance.png"),
  },
  {
    id: 5,
    iconName: "Excercise",
    icon: require("../assets/moodIcons/activity_exercise.png"),
  },
  {
    id: 6,
    iconName: "Relax",
    icon: require("../assets/moodIcons/activity_relax.png"),
  },
  {
    id: 7,
    iconName: "Movies",
    icon: require("../assets/moodIcons/activity_movies.png"),
  },
  {
    id: 6,
    iconName: "Gaming",
    icon: require("../assets/moodIcons/activity_gaming.png"),
  },
  {
    id: 7,
    iconName: "Reading",
    icon: require("../assets/moodIcons/activity_reading.png"),
  },
  {
    id: 8,
    iconName: "Cleaning",
    icon: require("../assets/moodIcons/activity_cleaning.png"),
  },
  {
    id: 9,
    iconName: "Sleep",
    icon: require("../assets/moodIcons/activity_sleep.png"),
  },
  {
    id: 10,
    iconName: "Eat",
    icon: require("../assets/moodIcons/activity_eat.png"),
  },
  {
    id: 11,
    iconName: "Shopping",
    icon: require("../assets/moodIcons/activity_shopping.png"),
  },
]

const ShowActivityIcons = ({ item }) => (
  <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 20 }}>
    <Image
      style={{
        height: 35,
        width: 35,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "forestgreen",
        marginBottom: 5,
      }}
      source={item.icon}
    />
    <Text style={{ fontSize: 10 }}>{item.iconName}</Text>
  </TouchableOpacity>
)

export default function MoodScreen() {
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        marginTop: 60,
        backgroundColor: "#F2F0F0",
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "bold",
            padding: 10,
            fontSize: 24,
            textTransform: "uppercase",
            color: "#413C58",
          }}
        >
          How are you feeling?
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "green", fontWeight: "bold", marginBottom: 10 }}>
          {date} · {month} · {year}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        {moodIcons.map((item, id) => {
          return (
            <TouchableOpacity
              key={id}
              style={{
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                source={item.icon}
                style={{ height: 40, width: 40, marginBottom: 5 }}
              />
              <Text style={{ textTransform: "uppercase" }}>
                {item.iconName}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            padding: 10,
            marginBottom: 10,
            fontSize: 24,
            marginTop: 30,
            textTransform: "uppercase",
            color: "#413C58",
          }}
        >
          What were you up to?
        </Text>
      </View>
      <FlatGrid
        itemDimension={100}
        data={activityIcons}
        renderItem={ShowActivityIcons}
      />

      <View>
        <NotesInput />
        <SubmitBtn />
      </View>
    </SafeAreaView>
  )
}
