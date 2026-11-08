import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import EventRow from '../../src/components/EventRow';
import { events } from '../../src/data/events';

export default function EventsScreen() {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [query, setQuery] = useState('');

  const shownEvents = events.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );

  function toggleSaved(id: number) {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((savedId) => savedId !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <TextInput
              style={styles.search}
              value={query}
              onChangeText={setQuery}
              placeholder="Search events"
            />
            <Text style={styles.hint}>Long-press an event to save it. Saved: {savedIds.length}</Text>
          </View>
        }
        data={shownEvents}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => (
          <EventRow
            event={item}
            saved={savedIds.includes(item.id)}
            onPress={() => router.push(`/events/${item.id}`)}
            onLongPress={() => toggleSaved(item.id)}
          />
        )}
        ListEmptyComponent={<Text>No events match</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  search: {
    minHeight: 44,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  hint: {
    marginVertical: 12,
    color: '#6b7280',
  },
});
