import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CommitteeMemberScreen = () => {

    const committeeMembers = [
        {
            id: '1',
            name: 'Ramesh Kumar',
            designation: 'President',
            phone: '9876543210',
            email: 'ramesh@gmail.com',
            image:
                'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            id: '2',
            name: 'Suresh',
            designation: 'Secretary',
            phone: '9876543211',
            email: 'suresh@gmail.com',
            image:
                'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
            id: '3',
            name: 'Rajesh',
            designation: 'Treasurer',
            phone: '9876543212',
            email: 'rajesh@gmail.com',
            image:
                'https://randomuser.me/api/portraits/men/3.jpg',
        },
    ];

    return (
        <LinearGradient
            colors={['#FFF8F3', '#FDEFE5', '#FFF5EE']}
            style={styles.container}
        >
            <Text style={styles.heading}>
                Temple Committee
            </Text>

            <FlatList
                data={committeeMembers}
                numColumns={2}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: 15,
                }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />

                        <Text style={styles.designation}>
                            {item.designation}
                        </Text>

                        <Text style={styles.name}>
                            {item.name}
                        </Text>

                        <Text style={styles.info}>
                            📞 {item.phone}
                        </Text>

                        <Text style={styles.info}>
                            ✉️ {item.email}
                        </Text>
                    </View>
                )}
            />
        </LinearGradient>
    );
};

export default CommitteeMemberScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#7A3E00',
        marginTop: 20,
        marginHorizontal: 20,
    },

    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',

        elevation: 5,
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 10,
    },

    designation: {
        backgroundColor: '#F59E47',
        color: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
        fontSize: 12,
        overflow: 'hidden',
        marginBottom: 8,
    },

    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#7A3E00',
        textAlign: 'center',
    },

    info: {
        marginTop: 5,
        color: '#666',
        fontSize: 12,
        textAlign: 'center',
    },
});