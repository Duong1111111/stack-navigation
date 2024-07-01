import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        Alert.alert(
            'Welcome',
            'Chào mừng đến với khoá học lập trình React Native tại CodeFresher.vn'
        );
    }, []);

    useEffect(() => {
        setIsValid(isPhoneValid(phone));
    }, [phone]);

    const isPhoneValid = (phone) => {
        // Giả định một logic kiểm tra số điện thoại hợp lệ
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const onPress = () => {
        const message = isPhoneValid(phone)
            ? 'Số điện thoại đúng định dạng'
            : 'Số điện thoại không đúng định dạng. Vui lòng nhập lại';
        Alert.alert('', message);

        if (isPhoneValid(phone)) {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Nhập số điện thoại</Text>
            <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                placeholder="Nhập số điện thoại"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Tiếp tục" onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
        width: '100%',
    },
});

export default SignInScreen;
