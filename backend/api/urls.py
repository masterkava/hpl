
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profile', views.ProfileViewSet, basename='profiles')


urlpatterns = [
    path('api/', include(router.urls)),
    # path('create_profile/', views.add_profile, name='add-profile'),
]
