from django.db.models import fields
from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileSerializerRegistration(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'fname', 'lname', 'mobile_number', 'sabha_location', 'date_of_birth', 'yuvak_type', 'reference', 'good_at', 'hand', 'tshirt_size', 'tshirt_name']
        