from django.db import models


def upload_path(instance, filename):
    return '/'.join(['images', str(instance.fname)+str(instance.id), filename])

class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    yuvak_type = models.CharField(max_length=255, blank=True, null=True, default='')
    mobile_number = models.CharField(max_length=255)
    date_of_birth = models.CharField(max_length=255)
    sabha_location = models.CharField(max_length=255)
    reference = models.CharField(max_length=255)
    good_at = models.CharField(max_length=255)
    hand = models.CharField(max_length=255)
    tshirt_size = models.CharField(max_length=255)
    tshirt_name = models.CharField(max_length=255)
    payment_amount = models.IntegerField(blank=True, null=True, default=0)
    payment_type = models.CharField(max_length=255, blank=True, null=True, default='')
    payment_status = models.CharField(max_length=255, blank=True, null=True, default='')
    profile = models.FileField(blank=True, default='', upload_to=upload_path, verbose_name='profile')
    auction = models.FileField(blank=True, default='', upload_to=upload_path, verbose_name='auction')
    availibility = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True, default='')


class AuctionPlayersDetails(models.Model):
    id = models.AutoField(primary_key=True)
    player_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    category = models.CharField(max_length=255, blank=True, null=True, default="")
    is_sold = models.BooleanField(blank=True, null=True, default=0)
    sold_to = models.CharField(max_length=255, blank=True, null=True, default="")
    sold_on = models.IntegerField(blank=True, null=True, default=0)

class TeamSelection(models.Model):
    id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    category = models.CharField(max_length=255, blank=True, null=True, default="")
    team_name = models.CharField(max_length=255, default="", blank=True, null=True)


class TeamAuthentication(models.Model):
    id = models.AutoField(primary_key=True)
    team_name = models.CharField(max_length=255)
    team_password = models.CharField(max_length=255)
