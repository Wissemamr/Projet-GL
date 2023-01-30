from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

from Utilisateur.models import UserProfile


class UserProfileInline(admin.StackedInline):

    model = UserProfile


class TodoUserAdmin(UserAdmin):

    inlines = (UserProfileInline, )


admin.site.unregister(User)
admin.site.register(User, TodoUserAdmin)
