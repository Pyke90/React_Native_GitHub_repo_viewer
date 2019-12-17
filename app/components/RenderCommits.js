import React from 'react';
import { ScrollView, View } from 'react-native';
import { Input, Button, Text, ListItem, Image } from 'react-native-elements';

export const RenderCommits = (props) => {
    
    console.log("rendaaaaaa", props.commits)
    return (
            <ScrollView>
            {
              props.commits.map((commit, i) => {
                return (
                  <ListItem
                    key={i} 
                    leftAvatar={{ source: {uri:commit.author.avatar_url}}}
                    subtitle={ 
                    <View>
                    
                    <Text> Author: {JSON.stringify(commit.commit.author.name)}</Text>
                    <Text> Message: {JSON.stringify(commit.commit.message)}</Text>
                    
                    </View>                    
                    }
                  />
                )
              })
            }
            </ScrollView>
            )
 }
