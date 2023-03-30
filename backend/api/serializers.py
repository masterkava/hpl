from django.db.models import fields
from rest_framework import serializers
from .models import Profile, AuctionPlayersDetails, TeamSelection, TeamAuthentication



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class AuctionPlayersDetailsSerializer(serializers.ModelSerializer):
    # profile = ProfileSerializer(many=True)
    class Meta:
        model = AuctionPlayersDetails
        fields = "__all__"
        depth = 1


class ProfileSerializerRegistration(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'fname', 'lname', 'mobile_number', 'sabha_location', 'date_of_birth', 'yuvak_type', 'reference', 'good_at', 'hand', 'tshirt_size', 'tshirt_name']


class BasicDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'fname', 'lname', 'mobile_number', 'sabha_location', 'date_of_birth', 'reference']


class PlayerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'good_at', 'hand', 'tshirt_size', 'tshirt_name']

class ProfilePhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'fname', 'lname', 'profile', 'auction']

class AuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'fname', 'lname', 'hand', 'good_at', 'auction']


class TeamSelectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamSelection
        fields = "__all__"

class TeamAuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamAuthentication
        fields = "__all__"