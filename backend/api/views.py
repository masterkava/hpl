from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, viewsets
from rest_framework import status
from rest_framework.views import APIView
from .serializers import (
    ProfileSerializer, 
    ProfileSerializerRegistration, 
    BasicDetailsSerializer, 
    PlayerDetailsSerializer,
    ProfilePhotosSerializer
    )
from .models import Profile
from django.http import Http404


# profile using mobile number get req
class ProfileMobileDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
        
    def get(self, request, pk, format=None):
        print("req data", request.data)
        profiles = Profile.objects.filter(mobile_number=pk)
        serializer = ProfilePhotosSerializer(profiles, many=True)
        return Response(serializer.data)


class ProfilePhotosList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        profile_photos = Profile.objects.all()
        serializer = ProfilePhotosSerializer(profile_photos, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProfilePhotosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfilePhotosDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = ProfilePhotosSerializer(profile)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = ProfilePhotosSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        profile = self.get_object(pk)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    



class BasicDetailsList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        profiles = Profile.objects.all()
        serializer = BasicDetailsSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BasicDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BasicDetailsDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = BasicDetailsSerializer(profile)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = BasicDetailsSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        profile = self.get_object(pk)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class PlayerDetailsList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        player_profiles = Profile.objects.all()
        serializer = PlayerDetailsSerializer(player_profiles, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PlayerDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlayerDetailsDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        player_profile = self.get_object(pk)
        serializer = PlayerDetailsSerializer(player_profile)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        player_profile = self.get_object(pk)
        serializer = PlayerDetailsSerializer(player_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        player_profile = self.get_object(pk)
        player_profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# class BasicDetailsViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = BasicDetailsSerializer

# class PlayerDetailsViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = PlayerDetailsSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializerRegistration

    # def post(self, request, *args, **kwargs):
    #     fname = request.data['fname']
    #     lname = request.data['lname']
    #     profile = request.data['profile']
    #     auction = request.data["auction"]
    #     Profile.objects.create(fname=fname, lname=lname, profile=profile, auction=auction)
    #     return HttpResponse( {"message": "Profile Create"}, status=201 )



# @api_view(['GET'])
# def ApiOverview(request):
#     api_urls = {
#         'all_items': '/',
#         'Search by Category': '/?category=category_name',
#         'Search by Subcategory': '/?subcategory=category_name',
#         'Add': '/create',
#         'Update': '/update/pk',
#         'Delete': '/item/pk/delete'
#     }
 
#     return Response(api_urls)

# @api_view(['POST'])
# def add_profile(request):
#     profile = ProfileSerializer(data=request.data)
#     print("Requested data", request.data["profile"])
#     print("Requested data", type(request.data["profile"]))
#     # validate for already existing data
#     if profile.is_valid():
#         profile.save()
#         return Response(profile.data)
#     else:
#         print("Profile is not valid")
#         return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def add_profile_registration(request):
    profile = ProfileSerializerRegistration(data=request.data)
    print("Requested data", request.data)
    # validate for already existing data
    if profile.is_valid():
        profile.save()
        return Response(profile.data, status=status.HTTP_201_CREATED)
    else:
        print("Profile is not valid")
        return Response(status=status.HTTP_404_NOT_FOUND)

