from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, viewsets
from rest_framework import status
from .serializers import ProfileSerializer, ProfileSerializerRegistration
from .models import Profile


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

