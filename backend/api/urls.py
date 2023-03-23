
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profile', views.ProfileViewSet, basename='profiles')
# router.register('basic_detail', views.BasicDetailsList, basename='basic_detail')
# router.register('basic_detail/<int:pk>/', views.BasicDetailsDetail, basename='basic_details')


urlpatterns = [
    path('api/', include(router.urls)),
    path('basic_detail/', views.BasicDetailsList.as_view()),
    path('basic_detail/<int:pk>/', views.BasicDetailsDetail.as_view()),
    path('player_detail/', views.PlayerDetailsList.as_view()),
    path('player_detail/<int:pk>/', views.PlayerDetailsDetail.as_view()),
    path('profile_photos/', views.ProfilePhotosList.as_view()),
    path('profile_photos/<int:pk>/', views.ProfilePhotosDetail.as_view()),
    path("profile_mobile/<int:pk>/", views.ProfileMobileDetail.as_view())
]
