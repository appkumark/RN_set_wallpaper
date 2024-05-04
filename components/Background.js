import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'

export default function Background() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [2, 5],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  if (hasGalleryPermission === false) {
    return <Text>No access to device library</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          top: '40%',
          zIndex: 999,
          width: '99%',
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity onPress={() => pickImage()}>
          <LinearGradient
            colors={['#F488F0', 'blue']}
            style={[styles.button, image && { opacity: 0.5 }]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <Text style={{ fontSize: 28, color: 'white' }}>Set Wallpaper</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
})
